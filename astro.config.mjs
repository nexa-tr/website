// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://nexa-tr.com',
	integrations: [
		starlight({
			plugins: [starlightBlog()],
			customCss: ['./src/styles/custom.css'],
			title: 'NEXA Topluluğu',
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/nexatr0' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/nexatr' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/nexa-tr' }
			],
			sidebar: [
				{
					label: 'Duyurular',
					items: [
						{ label: 'Ekip alımları', slug: 'announcements/recruitment' },
					],
				},
				{
					label: 'Hakkımızda',
					items: [
						{ label: 'Üyelerimiz', slug: 'info/members' },
						{ label: 'Biz Kimiz', slug: 'info/who-we-are' },
						{ label: 'İletişim', slug: 'info/contact' },
					],
				},
				{
					label: 'Projeler',
					items: [
						{ label: 'Proje 1', slug: 'projects/project-1' },
						{ label: 'Proje 2', slug: 'projects/project-2' },
					],
				},
			]
		}),
	],
});
