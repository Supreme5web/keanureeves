    // ── Custom Cursor ──
    const ring = document.getElementById('cursorRing');
    const dot  = document.getElementById('cursorDot');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    function animCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.borderColor = 'rgba(201,168,76,.9)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(201,168,76,.6)';
      });
    });

    // ── Scroll Reveal ──
    const reveals = document.querySelectorAll('.reveal, .stagger');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));

    // ── Hero Parallax ──
    const heroImg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = `scale(1) translateY(${y * 0.28}px)`;
      }
    }, { passive: true });

    // ── Fan Card 3D Tilt ──
    const fancard = document.querySelector('.fancard');
    const fancardVisual = document.querySelector('.fancard-visual');
    if (fancardVisual && fancard) {
      fancardVisual.addEventListener('mousemove', e => {
        const rect = fancardVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        fancard.style.transform = `rotateX(${y * -14}deg) rotateY(${x * 16}deg)`;
      });
      fancardVisual.addEventListener('mouseleave', () => {
        fancard.style.transform = 'rotateX(6deg) rotateY(-4deg)';
      });
    }