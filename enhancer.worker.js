self.onmessage = async ({ data }) => {
  try {
    const source = await createImageBitmap(new Blob([data.buffer], { type: data.type }));
    const scale = data.strength === 4 ? 3 : data.strength === 3 ? 2.5 : 2;
    const canvas = new OffscreenCanvas(Math.max(1, Math.round(source.width * scale)), Math.max(1, Math.round(source.height * scale)));
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const contrast = data.strength === 4 ? 145 : data.strength === 3 ? 132 : 118;
    const saturation = data.strength === 4 ? 132 : data.strength === 3 ? 118 : 108;
    const brightness = data.strength === 4 ? 106 : 104;
    ctx.filter = `contrast(${contrast}%) saturate(${saturation}%) brightness(${brightness}%)`;
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = data.strength === 4 ? .14 : .09;
    ctx.globalCompositeOperation = 'overlay';
    ctx.filter = 'none';
    ctx.drawImage(canvas, 0, 0);
    const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: .96 });
    const buffer = await blob.arrayBuffer();
    self.postMessage({ buffer, width: canvas.width, height: canvas.height }, [buffer]);
    source.close();
  } catch (error) {
    self.postMessage({ error: error.message || 'Background enhancement failed' });
  }
};
