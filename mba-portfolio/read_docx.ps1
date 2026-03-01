Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("C:\Users\V S SURESH\.gemini\antigravity\scratch\mba-portfolio\assets\pdfs\Seminar topic.docx")
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = [xml]$reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$xml.SelectNodes('//*[local-name()="p"]') | ForEach-Object { $_.InnerText }
