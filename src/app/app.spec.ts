import { TestBed } from "@angular/core/testing";
import { RouterTestingHarness } from "@angular/router/testing";
import { provideRouter } from "@angular/router";

import { App } from "./app";
import { routes } from "./app.routes";

describe("App", () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should display home page for default route", async () => {
    await harness.navigateByUrl("");

    console.log(harness.routeNativeElement?.textContent);
    expect(harness.routeNativeElement?.textContent).toContain("Hi");
  });

  it("should display home page for unknown route", async () => {
    await harness.navigateByUrl("/test");

    expect(harness.routeNativeElement?.textContent).toContain("404");
  });
});
