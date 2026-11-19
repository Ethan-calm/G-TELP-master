"""src/app.html + src/data.js → index.html, dist/app.html
   src/vocab.html + 단어 데이터 → vocab.html, dist/vocab.html (단어장 앱)"""
from pathlib import Path
root = Path(__file__).resolve().parent.parent
app = (root / 'src/app.html').read_text(encoding='utf-8')
data = (root / 'src/data.js').read_text(encoding='utf-8')
body = app.replace('/*DATA*/', data)
(root / 'dist').mkdir(exist_ok=True)
(root / 'dist/app.html').write_text(body, encoding='utf-8')
head = '''<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#d2394a">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon.svg">
<style>:root{padding-top:env(safe-area-inset-top,0px)}body{margin:0}[hidden]{display:none!important}</style>
'''
(root / 'index.html').write_text(head + body.replace('<main', '</head>\n<body>\n<main', 1) + '\n</body>\n</html>\n', encoding='utf-8')
start = data.index('const VOCAB_RAW')
end = data.index('\n', data.index('const VOCAB = ', start))
vbody = (root / 'src/vocab.html').read_text(encoding='utf-8').replace('/*VOCAB*/', data[start:end])
(root / 'dist/vocab.html').write_text(vbody, encoding='utf-8')
(root / 'vocab.html').write_text(head.replace('manifest.webmanifest', 'vocab.webmanifest') + vbody.replace('<main', '</head>\n<body>\n<main', 1) + '\n</body>\n</html>\n', encoding='utf-8')
print('built', len(body), 'bytes')
