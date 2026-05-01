import { Component } from "@angular/core";

import { Social } from "./social";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.html",
})
export class Home {
  socials: Social[] = [
    { name: "AtCoder", url: "https://atcoder.jp/users/erict" },
    { name: "GitHub", url: "https://github.com/ericthalakottur" },
    { name: "HackTheBox", url: "https://app.hackthebox.com/profile/904476" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ericthalakottur" },
    { name: "Blog", url: "https://blog.ericthalakottur.com" },
  ];
}
