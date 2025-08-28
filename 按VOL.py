
import re
from bs4 import BeautifulSoup

html = """
<p><a href="https://telegra.ph/姜仁卿---ARTGRAVIA写真VOL447-Kang-Inkyung-102P-515MB-08-25">姜仁卿 - ARTGRAVIA写真VOL.447 Kang Inkyung [102P-515MB]</a></p>
<p><a href="https://telegra.ph/ARTGRAVIA-VOL407-姜仁卿-124P179M-08-26">[ARTGRAVIA] VOL.407 姜仁卿 [124P179M]</a></p>
"""

soup = BeautifulSoup(html, "html.parser")

# 提取 (标题, 链接) 对
links = [(a.get_text(strip=True), a['href']) for a in soup.find_all("a")]

# 提取 VOL 后的数字
def extract_vol_num(title: str) -> int:
    match = re.search(r"VOL\.?(\d+)", title, re.IGNORECASE)
    return int(match.group(1)) if match else 0

# 按 VOL 数字排序
sorted_links = sorted(links, key=lambda x: extract_vol_num(x[0]))

# 重新生成 HTML
sorted_html = "\n".join(f'<p><a href="{href}">{title}</a></p>' for title, href in sorted_links)

print(sorted_html)
