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
						{ label: 'Ekip Alımları - Aralık 2025', slug: 'duyurular/ekip-alimlari-1' },
					],
				},
				{
					label: 'Hakkımızda',
					items: [
						{ label: 'Üyelerimiz', slug: 'bilgi/uyeler' },
						{ label: 'Biz Kimiz', slug: 'bilgi/hakkimizda' },
						{ label: 'Proje Süreçleri', slug: 'bilgi/surec' },
						{ label: 'Sıkça Sorulan Sorular', slug: 'bilgi/sorular' },
					],
				},
				{
					label: 'Projeler',
					items: [
						{ label: 'Proje 1', slug: 'projeler/proje-1' },
						{ label: 'Proje 2', slug: 'projeler/proje-2' },
						{ label: 'Proje 3', slug: 'projeler/proje-3' },
						{ label: 'Proje 4', slug: 'projeler/proje-4' },
					],
				},			
			]
		}),
	],
});
