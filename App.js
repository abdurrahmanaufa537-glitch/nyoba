import React, { useMemo, useState } from "react";

// Single-file caffe website (self-contained) for Emergent AI.
// Avoids dependency on missing HTML/CSS bundler.

const styles = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    background: "#0b0b0f",
    color: "#f4f4f5",
    minHeight: "100vh",
  },
  container: { maxWidth: 1100, margin: "0 auto", padding: 20 },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(11,11,15,0.7)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 20px",
    gap: 12,
  },
  brand: { fontWeight: 900, letterSpacing: 0.2 },
  nav: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
  linkBtn: {
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#f4f4f5",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 800,
  },
  cartBtn: {
    display: "inline-flex",
    gap: 10,
    alignItems: "center",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#f4f4f5",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 900,
  },
  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ff7a18",
    color: "#0b0b0f",
    fontWeight: 900,
    padding: "0 8px",
  },
  hero: {
    padding: "64px 20px",
    background:
      "radial-gradient(900px circle at 20% 10%, rgba(255,140,0,0.25), transparent 40%), radial-gradient(700px circle at 90% 30%, rgba(255,77,0,0.18), transparent 45%), #0b0b0f",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  heroGrid: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 18, alignItems: "center" },
  h1: { fontSize: 46, lineHeight: 1.05, margin: 0 },
  sub: { marginTop: 12, marginBottom: 22, opacity: 0.85, maxWidth: 540, fontSize: 15 },
  pillRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  pill: {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 13,
    opacity: 0.95,
    background: "rgba(255,255,255,0.02)",
    fontWeight: 800,
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  section: { padding: "40px 0" },
  sectionTitle: { fontSize: 22, margin: 0, marginBottom: 14, fontWeight: 900 },
  menuGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  product: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 16,
    minHeight: 158,
  },
  productName: { fontWeight: 900 },
  productDesc: { opacity: 0.85, marginTop: 6, fontSize: 13, minHeight: 38 },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginTop: 14 },
  price: { fontWeight: 900, color: "#ffb454" },
  btn: {
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#ff7a18",
    color: "#0b0b0f",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900,
  },
  btnGhost: {
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#f4f4f5",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900,
  },
  grid2: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    width: "min(760px, 100%)",
    borderRadius: 18,
    background: "#0f0f16",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 30px 90px rgba(0,0,0,0.55)",
  },
  modalHeader: {
    padding: 16,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  modalBody: { padding: 16 },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  qtyControls: { display: "flex", gap: 8, alignItems: "center" },
  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#f4f4f5",
    cursor: "pointer",
    fontWeight: 900,
  },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, fontWeight: 900 },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#f4f4f5",
  },
  textarea: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#f4f4f5",
    minHeight: 90,
    resize: "vertical",
  },
  footer: { padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.08)", opacity: 0.85 },
};

function money(n) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const products = useMemo(
    () => [
      { id: "espresso", name: "Espresso Classic", desc: "Kopi hitam pekat, crema tebal, rasa bold.", price: 22000 },
      { id: "latte", name: "Caramel Latte", desc: "Manis karamel creamy dengan aroma kopi lembut.", price: 32000 },
      { id: "mocha", name: "Choco Mocha", desc: "Cokelat + espresso, perpaduan yang bikin nagih.", price: 35000 },
      { id: "tea", name: "Iced Tea Peach", desc: "Teh dingin peach yang segar buat hari panas.", price: 24000 },
      { id: "matcha", name: "Matcha Fizz", desc: "Matcha lembut dengan sensasi segar dan bubbles.", price: 36000 },
      { id: "boba", name: "Brown Sugar Boba", desc: "Santan gula merah, boba kenyal, manis pas.", price: 39000 },
    ],
    []
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // {id, qty}

  const cartItemsCount = cart.reduce((sum, x) => sum + x.qty, 0);

  const cartLines = cart
    .map((line) => {
      const p = products.find((pp) => pp.id === line.id);
      if (!p) return null;
      return { ...line, product: p, lineTotal: p.price * line.qty };
    })
    .filter(Boolean);

  const total = cartLines.reduce((sum, x) => sum + x.lineTotal, 0);

  const addToCart = (id) => {
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.id === id);
      if (idx >= 0) {
        const next = prev.slice();
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const dec = (id) => {
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.id === id);
      if (idx < 0) return prev;
      const next = prev.slice();
      const qty = next[idx].qty - 1;
      if (qty <= 0) next.splice(idx, 1);
      else next[idx] = { ...next[idx], qty };
      return next;
    });
  };

  const inc = (id) => addToCart(id);

  const [contact, setContact] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const canCheckout = cartItemsCount > 0;

  const placeOrder = () => {
    if (!canCheckout) return;
    setSubmitted(true);
    setTimeout(() => {
      setCart([]);
      setCartOpen(false);
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>Nayo Coffee</div>
          <div style={styles.nav}>
            <button style={styles.linkBtn} onClick={() => scrollToId("menu")}>Menu</button>
            <button style={styles.linkBtn} onClick={() => scrollToId("about")}>Tentang</button>
            <button style={styles.linkBtn} onClick={() => scrollToId("contact")}>Kontak</button>
            <button style={styles.cartBtn} onClick={() => setCartOpen(true)}>
              Keranjang <span style={styles.badge}>{cartItemsCount}</span>
            </button>
          </div>
        </div>
      </div>

      <div style={styles.hero}>
        <div className="container" style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <h1 style={styles.h1}>Kopi premium, rasa yang bikin balik lagi.</h1>
              <p style={styles.sub}>
                Pilih minuman favoritmu dari menu di bawah. Tambahkan ke keranjang, lalu checkout.
              </p>
              <div style={styles.pillRow}>
                <div style={styles.pill}>100% biji pilihan</div>
                <div style={styles.pill}>Rasa konsisten tiap hari</div>
                <div style={styles.pill}>Siap untuk take away</div>
              </div>
            </div>
            <div style={styles.card}>
              <div style={{ fontWeight: 900, fontSize: 16 }}>Promo hari ini</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 13 }}>
                Beli 2 minuman, dapat bonus spesial (simulasi).
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button style={styles.btnGhost} onClick={() => scrollToId("menu")}>Lihat Menu</button>
                <button style={styles.btn} onClick={() => setCartOpen(true)} disabled={!canCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Menu Cafe</h2>
          <div style={styles.menuGrid}>
            {products.map((p) => (
              <div key={p.id} style={styles.product}>
                <div style={styles.productName}>{p.name}</div>
                <div style={styles.productDesc}>{p.desc}</div>
                <div style={styles.row}>
                  <div style={styles.price}>{money(p.price)}</div>
                  <button style={styles.btn} onClick={() => addToCart(p.id)}>Tambah</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Kenapa Nayo Coffee?</h2>
          <div style={styles.grid2}>
            <div style={styles.card}>
              <div style={{ fontWeight: 900 }}>Rasa terkurasi</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 13 }}>
                Kombinasi espresso, susu, dan bahan fresh untuk rasa yang konsisten.
              </div>
            </div>
            <div style={styles.card}>
              <div style={{ fontWeight: 900 }}>Cepat & rapi</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 13 }}>
                Sistem order simpel, checkout cepat, dan tampilan modern.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Kontak & Pesan</h2>
          <div className="grid2" style={styles.grid2}>
            <div style={styles.card}>
              <div style={{ fontWeight: 900 }}>Kirim pesan</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 13 }}>Isi form ini untuk demo. Tidak terkirim ke server.</div>
              <div style={{ marginTop: 14 }} />
              <div style={styles.formRow}>
                <input
                  style={styles.input}
                  placeholder="Nama"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                />
                <input
                  style={styles.input}
                  placeholder="No. HP"
                  value={contact.phone}
                  onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                />
              </div>
              <div style={{ marginTop: 12 }}>
                <textarea
                  style={styles.textarea}
                  placeholder="Pesan"
                  value={contact.message}
                  onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  style={styles.btn}
                  onClick={() => {
                    if (!contact.name.trim()) return;
                    if (!contact.phone.trim()) return;
                    if (!contact.message.trim()) return;
                    setSubmitted(true);
                    setTimeout(() => {
                      setContact({ name: "", phone: "", message: "" });
                      setSubmitted(false);
                    }, 900);
                  }}
                >
                  {submitted ? "Terkirim!" : "Kirim"}
                </button>
                <button style={styles.btnGhost} onClick={() => setContact({ name: "", phone: "", message: "" })}>
                  Reset
                </button>
              </div>
            </div>

            <div style={styles.card}>
              <div style={{ fontWeight: 900 }}>Info Singkat</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 13 }}>
                <div style={{ marginBottom: 8 }}><b>Alamat:</b> Jl. Kopi No. 12</div>
                <div style={{ marginBottom: 8 }}><b>Jam:</b> 08.00 - 20.00</div>
                <div style={{ marginBottom: 8 }}><b>WhatsApp:</b> 0812-xxxx-xxxx</div>
                <div style={{ marginBottom: 8 }}><b>Catatan:</b> Demo UI</div>
              </div>
              <div style={{ marginTop: 14 }}>
                <button
                  style={styles.btnGhost}
                  onClick={() => {
                    // quick fill demo
                    setContact({ name: "Pelanggan", phone: "0812-0000-0000", message: "Mau pesan menu yang mana nih?" });
                  }}
                >
                  Isi Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.container}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 900 }}>© {new Date().getFullYear()} Nayo Coffee</div>
            <div style={{ opacity: 0.85 }}>Website demo tanpa index.html (Emergent AI).</div>
          </div>
        </div>
      </div>

      {cartOpen && (
        <div
          style={styles.modalOverlay}
          onMouseDown={(e) => {
            if (e.currentTarget === e.target) setCartOpen(false);
          }}
        >
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <div style={{ fontWeight: 900 }}>Keranjang</div>
              <button style={styles.btnGhost} onClick={() => setCartOpen(false)}>Tutup</button>
            </div>
            <div style={styles.modalBody}>
              {cartLines.length === 0 ? (
                <div style={{ opacity: 0.85 }}>Keranjang masih kosong. Tambahkan minuman dari menu.</div>
              ) : (
                <div>
                  {cartLines.map((line) => (
                    <div key={line.id} style={styles.cartItem}>
                      <div>
                        <div style={{ fontWeight: 900 }}>{line.product.name}</div>
                        <div style={{ opacity: 0.85, fontSize: 13 }}>{money(line.product.price)} / pcs</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={styles.qtyControls}>
                          <button style={styles.qtyBtn} onClick={() => dec(line.id)}>-</button>
                          <div style={{ minWidth: 20, textAlign: "center", fontWeight: 900 }}>{line.qty}</div>
                          <button style={styles.qtyBtn} onClick={() => inc(line.id)}>+</button>
                        </div>
                        <div style={{ fontWeight: 900, color: "#ffb454" }}>{money(line.lineTotal)}</div>
                      </div>
                    </div>
                  ))}

                  <div style={styles.totalRow}>
                    <div>Total</div>
                    <div style={{ color: "#ffb454" }}>{money(total)}</div>
                  </div>

                  <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <button
                      style={styles.btnGhost}
                      onClick={() => setCart([])}
                    >
                      Kosongkan
                    </button>
                    <button
                      style={styles.btn}
                      onClick={placeOrder}
                      disabled={!canCheckout}
                    >
                      {submitted ? "Diproses..." : "Checkout"}
                    </button>
                  </div>

                  <div style={{ marginTop: 12, opacity: 0.85, fontSize: 13 }}>
                    Checkout ini demo UI (tidak terhubung server).
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

