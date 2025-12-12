function showPage(pageId) {
  // Sembunyikan semua halaman
  const pages = document.querySelectorAll(".page-content");
  pages.forEach((page) => page.classList.remove("active"));

  // Tampilkan halaman yang dipilih
  document.getElementById(pageId).classList.add("active");

  // Scroll ke atas
  window.scrollTo(0, 0);

  // Tutup menu mobile jika terbuka
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("active");
}

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// Tutup menu mobile saat klik di luar
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuBtn = document.querySelector(".mobile-menu-btn");

  if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    navMenu.classList.remove("active");
  }

  function showPotensiDetail(type) {
    const modal = document.getElementById("potensiModal");
    const content = document.getElementById("modalContent");

    const details = {
      nilam: {
        title: "Penyulingan Nilam",
        subtitle: "Industri Minyak Atsiri",
        icon: "fa-tractor",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        video: "/path/to/nilam-video.mp4",
        description:
          "Penyulingan nilam adalah proses pengolahan daun nilam kering menjadi minyak atsiri berkualitas tinggi. Proses ini menggunakan metode destilasi uap yang menghasilkan minyak nilam murni yang sangat bernilai di pasar internasional.",
        process:
          "Daun nilam kering dipetik dan dijemur hingga kadar air optimal (35-40%). Kemudian dilakukan proses penyulingan dengan uap panas selama 4-6 jam. Hasilnya berupa minyak nilam yang dipisahkan dari air dan dikemas dalam drum khusus.",
        benefits: [
          {
            icon: "fa-dollar-sign",
            title: "Nilai Ekonomi",
            desc: "Harga tinggi di pasar global",
          },
          {
            icon: "fa-users",
            title: "Lapangan Kerja",
            desc: "Menyerap tenaga kerja lokal",
          },
          {
            icon: "fa-leaf",
            title: "Berkelanjutan",
            desc: "Tanaman mudah dibudidayakan",
          },
        ],
      },
      kopra: {
        title: "Produksi Kopra",
        subtitle: "Komoditas Kelapa Kering",
        icon: "fa-store",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        video: "/path/to/kopra-video.mp4",
        description:
          "Kopra adalah daging buah kelapa tua yang telah dikeringkan. Produk ini menjadi bahan baku utama dalam pembuatan minyak kelapa, sabun, kosmetik, dan berbagai produk turunan kelapa lainnya.",
        process:
          "Kelapa tua dipilih dan dibelah untuk diambil dagingnya. Daging kelapa kemudian dijemur di bawah sinar matahari selama 3-5 hari hingga kadar air mencapai 6-7%. Kopra kering siap dijual ke pabrik minyak kelapa.",
        benefits: [
          {
            icon: "fa-globe",
            title: "Ekspor",
            desc: "Permintaan tinggi untuk ekspor",
          },
          {
            icon: "fa-chart-line",
            title: "Stabil",
            desc: "Harga relatif stabil",
          },
          { icon: "fa-sync", title: "Renewable", desc: "Sumber terbarukan" },
        ],
      },
      batako: {
        title: "Produksi Batako",
        subtitle: "Material Bangunan Lokal",
        icon: "fa-mountain",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        video: "/path/to/batako-video.mp4",
        description:
          "Batako adalah bahan bangunan berbentuk bata yang diproduksi dari campuran semen, pasir, dan air. Produksi batako lokal memberikan alternatif material bangunan berkualitas dengan harga terjangkau.",
        process:
          "Campuran semen, pasir, dan air dengan perbandingan tertentu diaduk hingga merata. Adonan dicetak menggunakan mesin press batako. Batako mentah kemudian dikeringkan selama 7-14 hari hingga mencapai kekuatan maksimal.",
        benefits: [
          {
            icon: "fa-home",
            title: "Konstruksi",
            desc: "Bahan bangunan berkualitas",
          },
          {
            icon: "fa-money-bill-wave",
            title: "Ekonomis",
            desc: "Harga terjangkau",
          },
          { icon: "fa-tools", title: "Lokal", desc: "Produksi mandiri desa" },
        ],
      },
      captikus: {
        title: "Penyulingan Cap Tikus",
        subtitle: "Warisan Budaya Minahasa",
        icon: "fa-drum",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        video: "/path/to/captikus-video.mp4",
        description:
          "Cap Tikus adalah minuman beralkohol tradisional khas Minahasa yang diproduksi melalui penyulingan nira aren. Proses pembuatannya merupakan warisan budaya turun-temurun yang masih dilestarikan hingga kini.",
        process:
          "Nira (saguer) dari pohon aren dikumpulkan dan difermentasi selama 2-3 hari. Setelah fermentasi, nira disuling menggunakan alat destilasi tradisional untuk memisahkan alkohol. Hasil sulingan ditampung dan dikemas untuk konsumsi.",
        benefits: [
          {
            icon: "fa-landmark",
            title: "Budaya",
            desc: "Pelestarian tradisi lokal",
          },
          {
            icon: "fa-gift",
            title: "Pariwisata",
            desc: "Daya tarik wisata budaya",
          },
          {
            icon: "fa-hand-holding-usd",
            title: "Pendapatan",
            desc: "Sumber pendapatan masyarakat",
          },
        ],
      },
      pasir: {
        title: "Produksi Pasir",
        subtitle: "Material Konstruksi Utama",
        icon: "fa-layer-group",
        gradient: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
        video: "/path/to/pasir-video.mp4",
        description:
          "Produksi pasir meliputi penggalian dan pengolahan material butiran alami dari sungai atau lahan galian. Pasir berkualitas menjadi komponen penting dalam konstruksi bangunan dan infrastruktur.",
        process:
          "Pasir digali dari lokasi yang telah memiliki izin. Material kemudian disaring untuk memisahkan ukuran butiran yang diinginkan. Pasir yang sudah bersih dikemas dan siap didistribusikan ke proyek konstruksi.",
        benefits: [
          {
            icon: "fa-building",
            title: "Konstruksi",
            desc: "Material penting bangunan",
          },
          {
            icon: "fa-truck",
            title: "Distribusi",
            desc: "Akses mudah ke pasar",
          },
          {
            icon: "fa-certificate",
            title: "Kualitas",
            desc: "Standar konstruksi terpenuhi",
          },
        ],
      },
      kayu: {
        title: "Produksi Kayu",
        subtitle: "Industri Kehutanan Berkelanjutan",
        icon: "fa-tree",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        video: "/path/to/kayu-video.mp4",
        description:
          "Produksi kayu mencakup pengolahan kayu gelondongan menjadi berbagai produk kayu siap pakai seperti papan, balok, dan material furniture. Industri ini dikelola dengan prinsip kehutanan berkelanjutan.",
        process:
          "Kayu gelondongan dipilih dan dipotong sesuai ukuran kebutuhan. Proses pengeringan dilakukan untuk mengurangi kadar air. Kayu kemudian dihaluskan dan siap dipasarkan atau diolah lebih lanjut menjadi produk jadi.",
        benefits: [
          {
            icon: "fa-industry",
            title: "Industri",
            desc: "Pengolahan kayu modern",
          },
          {
            icon: "fa-recycle",
            title: "Berkelanjutan",
            desc: "Pengelolaan hutan lestari",
          },
          { icon: "fa-box", title: "Produk", desc: "Beragam hasil olahan" },
        ],
      },
    };

    const data = details[type];

    content.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon" style="background: ${data.gradient}">
        <i class="fas ${data.icon}"></i>
      </div>
      <div class="modal-title">
        <h2>${data.title}</h2>
        <p class="modal-subtitle">${data.subtitle}</p>
      </div>
    </div>
    
    <div class="modal-video">
      <video controls>
        <source src="${data.video}" type="video/mp4">
        Browser Anda tidak mendukung video.
      </video>
    </div>
    
    <div class="modal-section">
      <h3><i class="fas fa-info-circle"></i> Deskripsi</h3>
      <p>${data.description}</p>
    </div>
    
    <div class="modal-section">
      <h3><i class="fas fa-cogs"></i> Proses Produksi</h3>
      <p>${data.process}</p>
    </div>
    
    <div class="modal-section">
      <h3><i class="fas fa-star"></i> Manfaat & Keunggulan</h3>
      <div class="info-grid">
        ${data.benefits
          .map(
            (benefit) => `
          <div class="info-item">
            <i class="fas ${benefit.icon}"></i>
            <h4>${benefit.title}</h4>
            <p>${benefit.desc}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

    modal.style.display = "block";
  }

  function closePotensiModal() {
    document.getElementById("potensiModal").style.display = "none";
  }

  // Close modal when clicking outside
  window.onclick = function (event) {
    const modal = document.getElementById("potensiModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
