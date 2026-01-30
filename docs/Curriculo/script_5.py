
# Leer el contenido de competencias.php y convertirlo a HTML puro
# (Ya lo tengo creado anteriormente, solo necesito convertirlo)

# Voy a crear un script de conversión rápida para los archivos restantes
import re

def convert_php_to_html(php_content, page_title, page_description):
    """Convierte contenido PHP a HTML puro"""
    # Eliminar la sección PHP del inicio
    html_content = re.sub(r'<\?php[\s\S]*?\?>', '', php_content)
    
    # Reemplazar variables PHP por su valor
    html_content = html_content.replace('<?php echo $page_title; ?>', page_title)
    html_content = html_content.replace('<?php echo $page_description; ?>', page_description)
    
    # Cambiar extensiones .php a .html en los enlaces
    html_content = html_content.replace('.php"', '.html"')
    html_content = html_content.replace(".php'", ".html'")
    
    return html_content

# Crear listado final de archivos
files_created = [
    "✅ index.html",
    "✅ introduccion.html", 
    "✅ disposiciones.html",
    "✅ areas.html",
    "⏳ competencias.html (pendiente)",
    "⏳ evaluacion.html (pendiente)",
    "✅ styles.css",
    "✅ script.js",
    "✅ README.md (actualizado para GitHub)"
]

print("\n" + "="*60)
print("📦 CONVERSIÓN PHP → HTML EN PROCESO")
print("="*60)
for file in files_created:
    print(f"   {file}")
print("="*60)

# Como los archivos son muy grandes, voy a crear los archivos faltantes de forma más compacta
print("\n🔨 Creando archivos restantes...")
