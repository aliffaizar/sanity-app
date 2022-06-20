export default {
	name: "blog",
	title: "Blog",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 125,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "content",
			title: "content",
			type: "text",
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "category" }],
				},
			],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
	],
};
