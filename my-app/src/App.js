import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reviews from './Reviews';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiskon="coming" title="Maternal Disaster" cate="VARSITY" />
      <Reviews />
    </div>
  );
}

function FotoProduk() {

  return (
    <div className="Foto">
      <img src="img/jaket.jpeg" />
    </div>
  );
}

function CekDiskon(props) {
  const { isDiskon } = props;
  if (isDiskon == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  } else if (isDiskon == "coming") {
    return (
      <p>Akan ada diskon ...</p>
    );
  } else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {

  const { cate, title, isDiskon } = props;
  const benefits = ["Stylish dan Timeless: Desain klasik cocok untuk berbagai gaya.", "Nyaman dan Hangat: Kombinasi bahan wol dan kulit memberikan kehangatan.", "Personalizable: Mudah disesuaikan dengan logo atau identitas pribadi."];
  const listBenefits = benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );

  return (
    <div>
      <div className="Deskripsi">
        <p className="Category">{cate}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR 150.000,00</p>
        <CekDiskon isDiskon={isDiskon} />
        <p className="Info">
          Jaket baseball varsity adalah jaket kasual dengan badan wol, lengan kulit, dan kancing depan, sering dihiasi logo atau huruf tim. Awalnya seragam olahraga, kini jadi tren fashion sporty.
        </p>
        <ul className="Benefit">
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahProduk(title, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahProduk(e) {
  // Menampilkan pop-up dengan pesan
  alert("Produk " + e + " berhasil dimasukkan ke keranjang!");
}

export default App;
