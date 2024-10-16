
# Monstrous Makeover

Este proyecto es una aplicación web desarrollada para una hackathon de Cloudinary. Los usuarios pueden subir imágenes y aplicarles una transformación temática, convirtiendo a las personas en monstruos seleccionados aleatoriamente. La imagen resultante puede descargarse tras la transformación.

## Características

- **Subida de imágenes**: Los usuarios pueden cargar imágenes desde sus dispositivos.
- **Transformación aleatoria**: La aplicación selecciona un monstruo aleatorio de una lista y transforma la imagen.
- **Comparación**: Se muestra una vista en paralelo entre la imagen original y la transformada.
- **Descarga**: El usuario puede descargar la imagen transformada.

## Tecnologías Utilizadas

- **Next.js**: Framework utilizado para el desarrollo del frontend.
- **React**: Librería para la creación de interfaces interactivas.
- **TypeScript**: Lenguaje para asegurar la tipificación estática.
- **Tailwind CSS**: Framework CSS para un diseño responsivo y moderno.
- **Shadcn/ui**: Librería de componentes de interfaz.
- **Cloudinary**: Para la subida y manipulación de imágenes.

## Instalación

### Requisitos previos

- Node.js y npm/pnpm instalados.
- Cuenta en [Cloudinary](https://cloudinary.com/).

### Pasos

1. Clona el repositorio:

    ```bash
    git clone https://github.com/usuario/monster-image-transformation.git
    cd monster-image-transformation
    ```

2. Instala las dependencias:

    ```bash
    pnpm install
    ```

3. Configura las variables de entorno:
   
   Crea un archivo `.env.local` en la raíz del proyecto y añade tus credenciales de Cloudinary:

    ```env
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=tu_upload_preset
    ```

4. Ejecuta el proyecto localmente:

    ```bash
    pnpm dev
    ```

5. Abre el navegador y navega a `http://localhost:3000`.

## Uso

1. Haz clic en el botón **Sube tu foto**.
2. Selecciona una imagen desde tu dispositivo.
3. La imagen será transformada automáticamente, aplicando la temática del monstruo seleccionado al azar.
4. Puedes comparar el resultado y descargar la imagen transformada.

