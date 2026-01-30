
# Leer los archivos PHP existentes y convertirlos
import os

# Competencias.html - versión simplificada del PHP
with open('competencias.php', 'r', encoding='utf-8') as f:
    competencias_php_content = f.read()

# Convertir a HTML
competencias_html = competencias_php_content.replace('<?php\n$page_title = "Competencias Clave";\n$page_description = "Las 8 competencias clave de la Educación Infantil";\n?>', '')
competencias_html = competencias_html.replace('<?php echo $page_title; ?>', 'Competencias Clave')
competencias_html = competencias_html.replace('<?php echo $page_description; ?>', 'Las 8 competencias clave de la Educación Infantil')
competencias_html = competencias_html.replace('.php"', '.html"')
competencias_html = competencias_html.replace(".php'", ".html'")

with open('competencias.html', 'w', encoding='utf-8') as f:
    f.write(competencias_html)

print("✅ competencias.html creado")

# Evaluacion.html
with open('evaluacion.php', 'r', encoding='utf-8') as f:
    evaluacion_php_content = f.read()

evaluacion_html = evaluacion_php_content.replace('<?php\n$page_title = "Evaluación";\n$page_description = "Criterios, procedimientos y documentos de evaluación en Educación Infantil";\n?>', '')
evaluacion_html = evaluacion_html.replace('<?php echo $page_title; ?>', 'Evaluación')
evaluacion_html = evaluacion_html.replace('<?php echo $page_description; ?>', 'Criterios, procedimientos y documentos de evaluación en Educación Infantil')
evaluacion_html = evaluacion_html.replace('.php"', '.html"')
evaluacion_html = evaluacion_html.replace(".php'", ".html'")

with open('evaluacion.html', 'w', encoding='utf-8') as f:
    f.write(evaluacion_html)

print("✅ evaluacion.html creado")

print("\n" + "="*60)
print("🎉 ¡CONVERSIÓN COMPLETADA CON ÉXITO!")
print("="*60)
print("\n📁 Archivos HTML creados:")
print("   1. ✅ index.html")
print("   2. ✅ introduccion.html")
print("   3. ✅ disposiciones.html")
print("   4. ✅ areas.html")
print("   5. ✅ competencias.html")
print("   6. ✅ evaluacion.html")
print("\n📦 Archivos adicionales:")
print("   7. ✅ styles.css")
print("   8. ✅ script.js")
print("   9. ✅ README.md (GitHub Pages)")
print("\n" + "="*60)
print("🚀 LISTO PARA SUBIR A GITHUB PAGES")
print("="*60)
print("\n📝 Próximos pasos:")
print("   1. Descarga todos los archivos")
print("   2. Crea un repositorio en GitHub")
print("   3. Sube los archivos con Git")
print("   4. Activa GitHub Pages en Settings")
print("   5. ¡Tu sitio estará online!")
print("\n💡 Más detalles en el archivo README.md")
print("="*60)
