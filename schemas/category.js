export default {
	name: "category",
	title: "Category",
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
	],
};
