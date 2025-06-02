import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './pages/ProductDetail';
import DashboardLayout from './layouts/DashboardLayout';
import UnderConstruction from './pages/UnderConstruction';

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/add-product" element={<AddProduct />} />
                <Route path="/products/:productID" element={<ProductDetail />} />
            </Route>

            <Route path="/about" element={<About />} />

            <Route path="*" element={<PageNotFound />} />
            <Route path="/underConstruction" element={<UnderConstruction/>} />
            <Route path='/editproduct/:productID' element={<EditProduct />} />


        </Routes>
    )
}

export default AppRoutes;