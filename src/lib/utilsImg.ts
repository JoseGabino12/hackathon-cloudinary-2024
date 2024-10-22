import { toast } from 'sonner';

export const download = async (publicIdTrans: string | undefined) => {
    if (!publicIdTrans) return

    try {
      const response = await fetch(publicIdTrans);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'monster-transformation.png'; // nombre del archivo
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Mostrar el toast después de la descarga exitosa
      toast("Imagen descargada con éxito");
    } catch (error) {
      toast("Hubo un error al descargar la imagen");
      console.error("Error al descargar la imagen:", error);
    }

  }

export const shareTo = (platform: string, publicIdTrans: string | undefined) => {
    let url = '';
    const title = '¡Mira mi transformación monstruosa!';
    const text = 'He transformado mi imagen en un monstruo usando Monstrous Makeover. ¡Dale un vistazo!';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${publicIdTrans}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${publicIdTrans}&text=${text}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}%20${publicIdTrans}`;
        break;
      default:
        return;
    }

    window.open(url, '_blank');
  };