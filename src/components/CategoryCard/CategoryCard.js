import React from 'react';

import { card } from './CategoryCard.module.scss';
const CategoryCard = ({data}) => {
	
	return (
		<ul>
			{data.map((value, index) => (
					<div class="max-w-sm rounded overflow-hidden shadow-lg">
					<img class="w-full" src="/mountain.jpg" alt="Mountain"/>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">Mountain</div>
					<p class="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
					</div>
					<div class="px-6 pt-4 pb-2">
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
					</div>
					</div>
			))}
		</ul>
	)
}
export default CategoryCard;