'use server';

import { User } from '@/models/associations';

export async function syncDb() {
	await User.sync({ alter: true });
}

export async function seedUsers() {
	// Drop all users
	await User.destroy({ truncate: true });

	const user1 = await User.create({
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@example.com',
		phone: '(555) 555-5555',
		password: 'jyhnuz-qaXnis-3vydfo', // the kind an idiot would have on his luggage
		avatar: 'https://cdn.designly.biz/fake-user/john.jpg',
		role: 'admin',
		status: 'active',
	});

	const user2 = await User.create({
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'jane@example.com',
		phone: '(555) 555-5556',
		password: 'jyhnuz-qaXnis-3vydfocuT', // the kind an idiot would have on his luggage
		avatar: 'https://cdn.designly.biz/fake-user/jane.jpg',
		role: 'customer',
		status: 'active',
	});

	const user3 = await User.create({
		firstName: 'Next',
		lastName: 'User',
		email: 'farook@example.com',
		phone: '(555) 555-6789',
		password: 'jyhnuz-qaXnis-3vydfoNext', // the kind an idiot would have on his luggage
		avatar: 'https://cdn.designly.biz/fake-user/jane.jpg',
		role: 'customer',
		status: 'active',
	});

	return [user1, user2, user3];
}
