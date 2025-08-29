from bs4 import BeautifulSoup

html = """
<p><a href="https://telegra.ph/DJAWA-BamBi---Moral-Guardian-of-School-08-26">[DJAWA]  BamBi - Moral Guardian of School</a></p>
<p><a href="https://telegra.ph/DJAWA-Heihwa---Hei-Miko-08-26">[DJAWA]  Heihwa - Hei-Miko!</a></p>
<p><a href="https://telegra.ph/DJAWA-PIA---Staycation-08-26">[DJAWA]  PIA - Staycation</a></p>
"""

soup = BeautifulSoup(html, "html.parser")

# 提取 (标题, 链接) 对
links = [(a.get_text(strip=True), a['href']) for a in soup.find_all("a")]

# 按标题字母排序
sorted_links = sorted(links, key=lambda x: x[0].lower())

# 重新生成 HTML
sorted_html = "\n".join(f'<p><a href="{href}">{title}</a></p>' for title, href in sorted_links)

print(sorted_html)
