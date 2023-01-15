import React, { useEffect } from 'react';
// components
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminProductModal from './AdminProductModal';
import AdminBody from './AdminBody';
// redux
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';

const AdminDashboard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		
			<React.StrictMode>
			<AdminHeader />
			<AdminActionBtns />
			<AdminCategoryModal />
			<AdminProductModal />
			<AdminBody />
			</React.StrictMode>
		
	);
};

export default AdminDashboard;
