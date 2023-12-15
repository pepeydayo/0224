const puppeteer = require('puppeteer');
const cron = require('node-cron');		// �^�C�}�[�Ǘ�

const tflag = 0;						// �x�����t���O

// �X�P�W���[�����O
cron.schedule('* * * * *', () => {
	(async () => {
		const browser = await puppeteer.launch({ headless: 'new', });
		const page = await browser.newPage();
		await page.goto('https://transit.yahoo.co.jp/diainfo/area/4');

		// �e�L���̃^�C�g�����擾
		const target = '.trouble > table > tbody > tr > td > a';
		const links = await page.$$eval(target, links => {
			return links.map(link => link.textContent);
		});
		// �o��
		links.forEach(function (item) {
			console.log(item);
			if (item == "���l���k���ݐ�") {
				var Obniz = require("obniz");
				var obniz = new Obniz("9040-9224"); // �ڑ��[��ID
				// �ڑ���
				obniz.onconnect = async function () {
					led = obniz.wired("LED", { anode: 8, cathode: 11 });//����,�Z���̏���
					led.on();
				}
			}
		});
		await browser.close();
	}
	)();
});


