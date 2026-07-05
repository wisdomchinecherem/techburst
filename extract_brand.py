import fitz, re, os
path = 'app/TechBurst_Brand_Guidelines_v2.pdf'
print('exists', os.path.exists(path))
doc = fitz.open(path)
print('pages', doc.page_count)
for i in range(min(6, doc.page_count)):
    page = doc.load_page(i)
    text = page.get_text()
    print(f'--- PAGE {i+1} ---')
    print(re.sub(r'\s+', ' ', text)[:12000])
    print()
