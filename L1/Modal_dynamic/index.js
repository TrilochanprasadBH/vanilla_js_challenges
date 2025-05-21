// index.js
document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBox = document.getElementById('modal-box');
    const closeBtn = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');
    const openBtn1 = document.getElementById('open-modal');
    const openBtn2 = document.getElementById('open-modal-2');
    let lastFocusedElement = null;

    // Utility: Trap focus inside modal
    function trapFocus(e) {
        if (e.key !== 'Tab') return;
        const focusable = modalBox.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                last.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === last) {
                first.focus();
                e.preventDefault();
            }
        }
    }

    // Open modal with dynamic content
    function openModal(contentHtml) {
        lastFocusedElement = document.activeElement;
        modalContent.innerHTML = contentHtml;
        modalOverlay.classList.remove('hidden');
        setTimeout(() => {
            closeBtn.focus();
        }, 50);
        document.addEventListener('keydown', handleKeydown);
    }

    // Close modal and return focus
    function closeModal() {
        modalOverlay.classList.add('hidden');
        document.removeEventListener('keydown', handleKeydown);
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    // Handle keyboard events
    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
        trapFocus(e);
    }

    // Open modal with different content
    openBtn1.addEventListener('click', () => {
        openModal(`
      <h2>Welcome to the Dynamic Modal! 🎉</h2>
      <p>This content is <b>dynamic</b> and can be anything you want.</p>
      <a href="https://www.example.com" target="_blank">Visit Example.com</a>
    `);
    });

    openBtn2.addEventListener('click', () => {
        openModal(`
      <h2>Another Modal</h2>
      <p>You can open as many modals as you want, with different content each time.</p>
      <input type="text" placeholder="Try tabbing here!" />
    `);
    });

    // Close modal on close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal on overlay click (but not when clicking inside modal box)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});
