import { expect, test } from "@playwright/test";

test("home page has navigation and footer", async ({ page }) => {
	await page.goto("/");
	const nav = await page.getByRole("navigation").textContent();
	const footer = await page.locator("footer").textContent();
	expect(nav).toContain("Lin Brain Lab");
	expect(footer).toContain("Copyright ©");
	expect(footer).toContain("fhlin[at]sri.utoronto.ca");
	expect(footer).toContain("+1 416 480 6100 Ext. 85709");
	expect(footer).toContain("Sunnybrook Research Institute");
});
