 const btnVerMais = document.getElementById('btnVerMais');
  const fotosExtras = document.getElementById('fotosExtras');

  // Flag para saber se já adicionamos as fotos
  let fotosJaAdicionadas = false;

  btnVerMais.addEventListener('click', () => {
    if (!fotosJaAdicionadas) {
      const novasFotos = [
        '/assets/img/logo.png',
        '/assets/img/logo.png',
        '/assets/img/logo.png',
        '/assets/img/logo.png'
      ];

      novasFotos.forEach(src => {
        const div = document.createElement('div');
        div.className = 'overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300';
        div.innerHTML = `<img src="${src}" alt="Foto da galeria" class="w-full h-56 object-cover" />`;
        fotosExtras.appendChild(div);
      });

      fotosJaAdicionadas = true;
    }

    fotosExtras.classList.toggle('hidden');
    btnVerMais.textContent = fotosExtras.classList.contains('hidden') ? 'Ver mais fotos' : 'Ver menos fotos';
  });
  const inputFile = document.getElementById('referencias');
  const label = inputFile.nextElementSibling.querySelector('span');

  inputFile.addEventListener('change', () => {
    if (inputFile.files.length === 0) {
      label.textContent = 'Nenhum arquivo selecionado';
    } else if (inputFile.files.length === 1) {
      label.textContent = inputFile.files[0].name;
    } else {
      label.textContent = `${inputFile.files.length} arquivos selecionados`;
    }
  });
   const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 dígitos
    }

    let formatted = value;

    if (value.length > 6) {
      // Formato (xx) xxxxx-xxxx
      formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      // Formato (xx) xxxxx
      formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      // Formato (xx
      formatted = `(${value}`;
    }

    e.target.value = formatted;
  });