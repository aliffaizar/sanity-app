export default {
	name: "portfolio",
	title: "Portfolio",
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
			title: "Content",
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
			name: "iamges",
			title: "Images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		},
	],
};
