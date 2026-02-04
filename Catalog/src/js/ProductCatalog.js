import '../scss/index.scss';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const LS_KEY = "productCatalog";

export default function ProductCatalog() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        discountPrice: "",
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(LS_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) setProducts(parsed);
            } catch {}
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(products));
    }, [products]);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    function validateForm () {
        const { title, description, image, price, discountPrice } = form;
        if (
            title === "" || description === "" || image === "" || price === ""
        ) {
            return false;
        }
        if (isNaN(Number(price)) || Number(price) < 0) {
            return false;
        }
        if (discountPrice !== "") {
            if (
                isNaN(Number(discountPrice)) ||
                Number(discountPrice) < 0 ||
                Number(discountPrice) > Number(price)
            ) {
                return false;
            }
        }
        return true;
    }

    function addProduct(event) {
        event.preventDefault();
        if (!validateForm()) {
            alert(
                "Пожалуйста, заполните все обязательные полякорректно." + 
                " Цены должны быть числовыми, скидочная цена не больше основной"
            );
            return;
        }
        const newProduct = {
            id: Date.now(),
            title: form.title,
            description: form.description,
            image: form.image,
            price: Number(form.price).toFixed(2),
            discountPrice: form.discountPrice === "" ? null : Number(form.discountPrice).toFixed(2),
        };
        setProducts((p) => [newProduct, ...p]);
        setForm({
            title: "",
            description: "",
            image: "",
            price: "",
            discountPrice: "",
        });
    }

    return (
        <div className="container">
            <form onSubmit={addProduct} noValidate>
                <h2>Добавить товар</h2>
                <label htmlFor="title">
                    Название *
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Название товара"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="description">
                    Краткое описание *
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Описание товара"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="image">
                    Ссылка на изображение *
                    <input
                        type="url"
                        id="image"
                        name="image"
                        placeholder="https://пример.ру/изображение.jpg"
                        value={form.image}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="price">
                    Цена BYN *
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Цена в BYN"
                        value={form.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </label>
                <label htmlFor="discountPrice">
                    Цена со скидкой
                    <input
                        type="number"
                        id="discountPrice"
                        name="discountPrice"
                        placeholder="Цена со скидкой (по желанию)"
                        value={form.discountPrice}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </label>
                <button type="submit">Добавить</button>
            </form>
            <section className="catalog">
                <h2>Каталог товаров</h2>
                {products.length === 0 ? (
                    <div className="empty">Пока товаров нет</div>
                ) : (
                    products.map(
                        ({ id, title, description, image, price, discountPrice }) => (
                            <article key={id} className="product">
                                <img
                                    src={image}
                                    alt={title}
                                />
                                <div className="product-info">
                                    <h3 className="product-title">{title}</h3>
                                    <p className="product-desc">{description}</p>
                                </div>
                                <div className="product-price" title="Цена в BYN">
                                    {discountPrice ? (
                                        <>
                                            <del>{price} BYN</del>
                                            <span>{discountPrice} BYN</span>
                                        </>
                                    ) : (
                                        <span>{price} BYN</span>
                                    )}
                                </div> 
                            </article>
                        )
                    )
                )}
            </section>
        </div>
    );
}