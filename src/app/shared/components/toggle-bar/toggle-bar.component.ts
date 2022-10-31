import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EventData, Label, LayoutBase, View } from "@nativescript/core";
import { CubicBezierAnimationCurve } from "@nativescript/core/ui/animation";

@Component({
  selector: "ns-toggle-bar",
  templateUrl: "toggle-bar.component.html",
  styleUrls: ["./toggle-bar.component.scss"],
})
export class ToggleBarComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() onToggle = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onToggleLoaded(args: EventData) {
    const lb = args.object as LayoutBase;

    const toggler = lb.page.getViewById("toggler") as View;

    lb.eachChildView((v: View) => {
      if (v.className === "toggler") {
        return;
      }

      v.on("tap", (a: EventData) => {
        const lbl = a.object as View;
        const loc = lbl.getLocationRelativeTo(lb);
        toggler
          .animate({
            translate: { x: loc.x, y: 0 },
            duration: 500,
            curve: new CubicBezierAnimationCurve(0.6, 0.72, 0, 1),
          })
          .finally(() => this.onToggle.emit((lbl as Label).text));
      });

      return true;
    });
  }
}
