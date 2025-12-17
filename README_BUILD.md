# Cum să creezi fișierul .exe pentru Windows

## Metoda 1: GitHub Actions (GRATUIT - Recomandat!)

1. **Creează un repository GitHub:**
   - Mergi pe https://github.com/new
   - Creează un repository nou (public sau private)

2. **Încarcă codul:**
   ```bash
   cd "/Users/deiuvrg/Library/CloudStorage/OneDrive-UniversitateaPolitehnicaTimisoara/An4IS/PIUG/STDC_DeiuVRG"
   git init
   git add AutoImportSSinWordReports.py .github/
   git commit -m "Add AutoImport script and build workflow"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

3. **Descarcă .exe-ul:**
   - Mergi la repository pe GitHub
   - Click pe tab-ul "Actions"
   - Workflow-ul va rula automat
   - După finalizare, click pe workflow → "Artifacts" → Download "AutoImportSSinWordReports-Windows"
   - Vei primi un fișier .zip cu .exe-ul pentru Windows

4. **Rulare manuală (opțional):**
   - În tab-ul "Actions", selectează "Build Windows EXE"
   - Click "Run workflow" → "Run workflow"

## Metoda 2: PC Windows

Dacă ai acces la un PC Windows:

```bash
# Instalează Python 3.11+ de pe python.org

# Instalează dependențele
pip install customtkinter python-docx pyinstaller

# Navighează la folder
cd "calea\catre\folder"

# Creează .exe
pyinstaller --onefile --windowed --name "AutoImportSSinWordReports" AutoImportSSinWordReports.py

# Fișierul va fi în: dist\AutoImportSSinWordReports.exe
```

## Metoda 3: Mașină Virtuală Windows

1. Instalează VirtualBox sau Parallels Desktop
2. Creează o VM cu Windows 10/11
3. Folosește Metoda 2 în VM

## Nota despre cross-compilation

❌ Nu poți crea un .exe Windows pe macOS direct cu PyInstaller.
✅ GitHub Actions este soluția cea mai simplă și gratuită!

## Fișierul rezultat

După build, vei avea:
- **AutoImportSSinWordReports.exe** (~50-70 MB)
- Poate fi distribuit fără a avea nevoie de Python instalat
- Funcționează pe Windows 10/11 (64-bit)
