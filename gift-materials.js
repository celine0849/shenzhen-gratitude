(() => {
  const posterLabels = ['暖光版', '深圳夜景版'];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  let dialog;
  let currentGift;

  function buildDialog() {
    dialog = document.createElement('dialog');
    dialog.className = 'gift-materials-dialog';
    dialog.setAttribute('aria-labelledby', 'gift-materials-title');
    dialog.innerHTML = `<div class="gift-materials-shell">
      <div class="gift-materials-heading"><div><p>感恩月 · 赠礼素材</p><h2 id="gift-materials-title"></h2></div><button class="gift-materials-close" type="button" aria-label="关闭话术与海报">×</button></div>
      <section class="gift-materials-section"><h3>送礼话术</h3><div class="gift-materials-copy" id="gift-materials-copy"></div><div class="gift-materials-tools"><button class="btn primary" type="button" data-copy-gift-script>复制话术</button><span class="gift-materials-status" role="status" aria-live="polite"></span></div></section>
      <section class="gift-materials-section"><h3>赠礼海报</h3><p class="gift-materials-hint">点击图片可查看原图；手机上可长按图片保存，也可以使用下方的下载按钮。</p><div class="gift-materials-posters" id="gift-materials-posters"></div></section>
    </div>`;
    document.body.append(dialog);
    dialog.querySelector('.gift-materials-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.querySelector('[data-copy-gift-script]').addEventListener('click', copyScript);
  }

  async function copyScript() {
    const status = dialog.querySelector('.gift-materials-status');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentGift.script);
      } else {
        const field = document.createElement('textarea');
        field.value = currentGift.script;
        field.style.cssText = 'position:fixed;left:-9999px';
        document.body.append(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('copy failed');
      }
      status.textContent = '话术已复制，可以按顾客情况调整后发送。';
    } catch {
      status.textContent = '复制失败，请长按上方文字复制。';
    }
  }

  window.openGiftMaterials = giftId => {
    currentGift = window.GRATITUDE_CONTENT?.gifts?.items.find(gift => gift.id === giftId && gift.posters?.length);
    if (!currentGift) return;
    if (!dialog) buildDialog();
    dialog.querySelector('#gift-materials-title').textContent = currentGift.title;
    dialog.querySelector('#gift-materials-copy').innerHTML = currentGift.script.split(/\n\s*\n/).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');
    dialog.querySelector('.gift-materials-status').textContent = '';
    dialog.querySelector('#gift-materials-posters').innerHTML = currentGift.posters.map((file, index) => {
      const src = `assets/gift-posters/${file}`;
      const label = posterLabels[index];
      return `<figure class="gift-materials-poster"><a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="查看${escapeHtml(currentGift.title)}${label}原图"><img src="${src}" alt="${escapeHtml(currentGift.title)}${label}海报" loading="lazy"></a><figcaption>${label}</figcaption><div class="gift-materials-poster-actions"><a class="btn primary" href="${src}" download="${escapeHtml(currentGift.title)}-${label}.jpg">下载海报</a><a class="btn" href="${src}" target="_blank" rel="noopener noreferrer">查看／保存原图</a></div></figure>`;
    }).join('');
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector('.gift-materials-close').focus();
  };
})();
