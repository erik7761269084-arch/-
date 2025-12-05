import os
import requests
from bs4 import BeautifulSoup
import re
import time
import json

# ================== 配置 ==================
TXT_FILE = r"D:\project\pythonLL\telegraph_links_exhentai五星漫画1.txt"

# 分页 JS 输出目录
OUTPUT_DIR_JS = r"E:\频道管理大全\comics\category\all_page"
# 每个漫画独立 JS 文件目录
OUTPUT_COMICS_DIR = r"E:\频道管理大全\comics\menu"

os.makedirs(OUTPUT_DIR_JS, exist_ok=True)
os.makedirs(OUTPUT_COMICS_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://telegra.ph/"
}

# 每个分页文件包含漫画数量
ITEMS_PER_PAGE = 100

# 分页文件编号起始值（page_1.js 开始）
START_PAGE_NUM = 2

# 漫画 IDcode 起始值（可指定从任意数字开始）
START_IDCODE = 2

# ================== 工具函数 ==================
def safe_filename(s):
    return re.sub(r'[\\/:*?"<>|]', '_', s)[:150].strip()

def normalize_src(u):
    if not u:
        return None
    u = u.strip()
    if u.startswith("//"):
        u = "https:" + u
    if u.startswith("/file/"):
        return "https://telegra.ph" + u
    if "telegra.ph/file/" in u and not u.startswith("http"):
        return "https://" + u
    return u

def extract_title(soup):
    tag = soup.select_one("header.tl_article_header h1") or soup.find("h1") or soup.find("title")
    return tag.get_text(strip=True) if tag else "未命名漫画"

def extract_images(soup, html_text):
    imgs = []
    # 优先 figure
    for fig in soup.find_all("figure"):
        img = fig.find("img")
        if img:
            src = img.get("src") or img.get("data-src") or img.get("data-original")
            src = normalize_src(src)
            if src:
                imgs.append(src)
    # 正则兜底
    if not imgs:
        pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.I)
        for m in pattern.finditer(html_text):
            src = normalize_src(m.group(1))
            if src:
                imgs.append(src)
    # 去重保持顺序
    seen = set()
    out = []
    for u in imgs:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out

# ================== 主流程 ==================
with open(TXT_FILE, "r", encoding="utf-8") as f:
    SOURCE_URLS = [line.strip() for line in f if line.strip()]

comic_list = []

for idx, url in enumerate(SOURCE_URLS):
    current_idcode = START_IDCODE + idx  # 从指定起始 IDcode 开始
    print(f"采集 IDcode {current_idcode}: {url}")
    try:
        resp = requests.get(url, headers=headers, timeout=15)
        resp.encoding = resp.apparent_encoding or "utf-8"
        html = resp.text
        soup = BeautifulSoup(html, "html.parser")

        title = extract_title(soup)
        imgs = extract_images(soup, html)
        cover = imgs[0] if imgs else ""

        # 构建漫画数据对象
        comic_data = {
            "IDcode": current_idcode,
            "title": title,
            "cover": cover,
            "url": f"https://yunvgong.com/comics/comicDetails.html?series={current_idcode}"
        }

        comic_list.append(comic_data)

        # 每个漫画生成独立 JS 文件
        comic_js_content = f"const comicData = {json.dumps({'IDcode': current_idcode, 'title': title, 'sourceUrl': url, 'images': imgs}, ensure_ascii=False, indent=4)};\n"
        comic_js_file = os.path.join(OUTPUT_COMICS_DIR, f"{current_idcode}_comics_data.js")
        with open(comic_js_file, "w", encoding="utf-8") as cf:
            cf.write(comic_js_content)

        print(f"📄 已生成漫画 JS 文件: {comic_js_file}")
        time.sleep(0.5)
    except Exception as e:
        print(f"❌ 采集失败: {e}")
        continue

# ================== 生成分页 JS 文件 ==================
page_count = (len(comic_list) + ITEMS_PER_PAGE - 1) // ITEMS_PER_PAGE

for page_idx in range(page_count):
    start = page_idx * ITEMS_PER_PAGE
    end = start + ITEMS_PER_PAGE
    page_items = comic_list[start:end]

    # 当前分页编号
    current_page_num = START_PAGE_NUM + page_idx

    # 添加 pageSeq 序号（从当前 IDcode 开始连续叠加）
    for i, item in enumerate(page_items):
        item["pageSeq"] = item["IDcode"]

    js_content = "// 每个对象包含：title、cover、url、pageSeq\n"
    js_content += "const COMIC_DATA = " + json.dumps(page_items, ensure_ascii=False, indent=4) + ";\n"

    # 分页文件名称按照序号生成 page_1.js, page_2.js ...
    page_file = os.path.join(OUTPUT_DIR_JS, f"page_{current_page_num}.js")
    with open(page_file, "w", encoding="utf-8") as pf:
        pf.write(js_content)

    print(f"📄 已生成目录 JS 文件: {page_file}")

print("\n🎉 完成！")
