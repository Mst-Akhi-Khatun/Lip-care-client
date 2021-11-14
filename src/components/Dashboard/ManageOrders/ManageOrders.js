import React from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    return (
        <div className="mb-5">
            <h1 className="pink-text mt-5">Manage All Orders</h1>
            <h3 className="light-pink-text">All customers ordered lipsticks are here</h3>
            <Table className="light-pink-bg my-5" responsive="sm" striped bordered hover>
                <thead>
                    <tr className="pink-text">
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email </th>
                        <th>Phone</th>
                        <th>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Admin</td>
                        <td>admin@admin.com</td>
                        <td>01761067475</td>
                        <td>Lal Lipsticks</td>
                        <td>
                            <button className="btn btn-outline-info mt-1">Shipped</button>
                            <button className="btn btn-outline-danger ms-2 mt-1">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;