import '../scss/index.scss';

import React, { useState } from "react";

const products = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    count: Math.floor(Math.random() * 100) + 1,
    price: (Math.random() * 100).toFixed (2),
}));

export default function ProductTable() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className = "product-table-wrapper">
            <h1 className = "title">Product Table</h1>
            <table className = "product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th className = "text-right">Count</th>
                        <th className = "text-right">Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(({id, name, count, price}) => (
                        <tr key={id} className = "table-row">
                            <td>{id}</td>
                            <td>{name}</td>
                            <td className = "text-right">{count}</td>
                            <td className = "text-right">{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className = "pagination" role = "navigation" aria-label = "Pagination Navigation">
                {Array.from({ length: totalPages }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button
                            key = {pageNum}
                            type = "button"
                            onClick = {() => setPage(pageNum)}
                            className = {`page-btn ${page === pageNum ? "active" : ""}`}
                            aria-current = {page === pageNum ? "page" : undefined}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}