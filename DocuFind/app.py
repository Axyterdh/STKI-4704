
import streamlit as st
import pandas as pd
import re

from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# ==========================================
# 1. KONFIGURASI APLIKASI
# ==========================================

st.set_page_config(
    page_title="DocuFind - Pencarian Dokumen",
    page_icon="🔎",
    layout="wide"
)


# ==========================================
# 2. INISIALISASI PREPROCESSING
# ==========================================

stemmer_factory = StemmerFactory()
stemmer = stemmer_factory.create_stemmer()

stopword_factory = StopWordRemoverFactory()
stopwords = set(stopword_factory.get_stop_words())


def preprocessing(teks):
    teks = str(teks).lower()
    teks = re.sub(r'[^a-zA-Z\s]', ' ', teks)

    tokens = teks.split()
    tokens = [kata for kata in tokens if kata not in stopwords]
    tokens = [stemmer.stem(kata) for kata in tokens]

    return ' '.join(tokens)


# ==========================================
# 3. MEMUAT DATASET
# ==========================================

@st.cache_data
def load_dataset():
    df = pd.read_csv("dataset_docufind_20_dokumen.csv")

    df["teks_preprocessing"] = df["isi_dokumen"].apply(preprocessing)

    return df


try:
    df = load_dataset()

except FileNotFoundError:
    st.error(
        "Dataset tidak ditemukan! "
        "Pastikan file CSV berada di folder yang sama dengan app.py."
    )
    st.stop()


# ==========================================
# 4. PERHITUNGAN TF-IDF
# ==========================================

@st.cache_resource
def build_tfidf(teks_dokumen):
    vectorizer = TfidfVectorizer()
    matrix = vectorizer.fit_transform(teks_dokumen)

    return vectorizer, matrix


tfidf_vectorizer, tfidf_matrix = build_tfidf(
    tuple(df["teks_preprocessing"])
)


# ==========================================
# 5. DESAIN TAMPILAN
# ==========================================

st.title("🔎 DocuFind")
st.subheader("Sistem Pencarian Dokumen Cerdas")

st.write(
    "Temukan dokumen pembelajaran Informatika "
    "menggunakan metode TF-IDF dan Cosine Similarity."
)

st.divider()

col1, col2 = st.columns(2)

with col1:
    st.metric("Total Dokumen", len(df))

with col2:
    st.metric("Jumlah Kategori", df["kategori"].nunique())


# ==========================================
# 6. FORM PENCARIAN
# ==========================================

st.subheader("Pencarian Dokumen")

query = st.text_input(
    "Masukkan kata kunci pencarian:",
    placeholder="Contoh: belajar pemrograman Python"
)

jumlah_hasil = st.selectbox(
    "Jumlah hasil pencarian",
    [3, 5, 10, 20],
    index=1
)

tombol_cari = st.button(
    "🔍 Cari Dokumen",
    type="primary"
)


# ==========================================
# 7. PROSES PENCARIAN
# ==========================================

if tombol_cari:

    st.divider()
    st.subheader("Hasil Pencarian")

    # Memeriksa input kosong
    if not query.strip():

        st.warning(
            "⚠️ Kolom pencarian masih kosong. "
            "Silakan masukkan kata kunci terlebih dahulu."
        )

    else:

        # Preprocessing query
        query_preprocessing = preprocessing(query)

        # Memeriksa hasil preprocessing
        if not query_preprocessing.strip():

            st.error(
                "Kata kunci tidak dapat diproses. "
                "Silakan gunakan kata kunci lain."
            )

        else:

            # Mengubah query menjadi vektor TF-IDF
            query_vector = tfidf_vectorizer.transform(
                [query_preprocessing]
            )

            # Menghitung Cosine Similarity
            skor = cosine_similarity(
                query_vector,
                tfidf_matrix
            ).flatten()

            # Menggabungkan skor dengan dataset
            hasil = df.copy()
            hasil["skor_similarity"] = skor

            # Batas minimum similarity
            batas_similarity = 0.10

            hasil = hasil[
                hasil["skor_similarity"] >= batas_similarity
            ].sort_values(
                by="skor_similarity",
                ascending=False
            ).head(jumlah_hasil)

            # Menampilkan informasi query
            st.write("**Kata kunci:**", query)

            st.caption(
                f"Hasil preprocessing: {query_preprocessing}"
            )

            # Memeriksa hasil pencarian
            if hasil.empty:

                st.error("❌ Dokumen tidak ditemukan!")

                st.info(
                    "Maaf, DocuFind tidak menemukan dokumen "
                    "yang sesuai dengan kata kunci pencarian Anda."
                )

                st.markdown("**Tips pencarian:**")
                st.write("- Gunakan kata kunci yang lebih spesifik.")
                st.write("- Gunakan istilah yang terdapat dalam dokumen.")
                st.write("- Periksa kembali kata kunci pencarian.")

            else:

                st.success(
                    f"✅ Ditemukan {len(hasil)} dokumen yang cocok."
                )

                # Menampilkan daftar dokumen
                for nomor, (_, dokumen) in enumerate(
                    hasil.iterrows(), start=1
                ):

                    with st.container(border=True):

                        st.markdown(
                            f"### {nomor}. {dokumen['judul']}"
                        )

                        st.write(
                            f"**ID Dokumen:** {dokumen['id_dokumen']}"
                        )

                        st.write(
                            f"**Kategori:** {dokumen['kategori']}"
                        )

                        skor_similarity = float(
                            dokumen["skor_similarity"]
                        )

                        st.progress(
                            min(skor_similarity, 1.0)
                        )

                        st.write(
                            f"**Skor Similarity:** "
                            f"{skor_similarity:.4f}"
                        )

                        with st.expander("📄 Lihat isi dokumen"):
                            st.write(dokumen["isi_dokumen"])


# ==========================================
# 8. INFORMASI APLIKASI
# ==========================================

st.divider()

st.caption(
    "DocuFind | Implementasi TF-IDF dan Cosine Similarity "
    "pada Sistem Temu Kembali Informasi Berbasis Dokumen Teks"
)
