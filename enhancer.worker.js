self.onmessage = async ({ data }) => {
  try {
    const source = await createImageBitmap(new Blob([data.buffer], { type: data.type }));
    const scale = data.strength === 4 ? 3 : data.strength === 3 ? 2.5 : 2;
    const canvas = new OffscreenCanvas(Math.max(1, Math.round(source.width * scale)), Math.max(1, Math.round(source.height * scale)));
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const contrast = data.strength === 4 ? 165 : data.strength === 3 ? 145 : 128;
    const saturation = data.strength === 4 ? 140 : data.strength === 3 ? 124 : 112;
    const brightness = data.strength === 4 ? 108 : 105;
    ctx.filter = `contrast(${contrast}%) saturate(${saturation}%) brightness(${brightness}%)`;
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
    const detail = new OffscreenCanvas(canvas.width, canvas.height);
    const detailCtx = detail.getContext('2d');
    detailCtx.filter = 'contrast(170%)';
    detailCtx.drawImage(canvas, 0, 0);
    ctx.globalAlpha = data.strength === 4 ? .22 : .15;
    ctx.globalCompositeOperation = 'soft-light';
    ctx.drawImage(detail, 0, 0);
    const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: .96 });
    const buffer = await blob.arrayBuffer();
    self.postMessage({ buffer, width: canvas.width, height: canvas.height }, [buffer]);
    source.close();
  } catch (error) {
    self.postMessage({ error: error.message || 'Background enhancement failed' });
  }
};
