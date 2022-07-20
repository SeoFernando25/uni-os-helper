import { AddCommand, PageReplacement, ReplacementCommand, type PageReference } from "./PageReplacement";
import { ComandGroup, SetExtraCommand, type Command } from "./Command";





export class FIFOReplacement extends PageReplacement {


    getSteps(): Command[] {
        let pointer = 0;;
        let steps: Command[] = [];
        this.faultHistory = [];
        this.pages.forEach((page, i) => {
            var cmd: Command;


            const frame = new Map<number, PageReference>();
            this.pages.filter(page => page.frameI > -1).forEach(page => {
                frame.set(page.value, page);
            });


            if (frame.has(page.value)) {
                this.faultHistory.push(false);
                steps.push(new ComandGroup());
                return;
            }
            var cmdGroup = new ComandGroup();

            // If there are less than nFrames pages in the frame, add the page
            if (frame.size < this.nFrames) {
                cmd = new AddCommand(page, pointer++);
                cmdGroup.commands.push(cmd);
                cmdGroup.execute();
                steps.push(cmdGroup);
                this.faultHistory.push(true);
                return;
            }

            // Find the page with extra = pointer
            let pointedPage = this.pages.find(p => p.frameI == (pointer % this.nFrames));

            cmd = new ReplacementCommand(
                pointedPage,
                page, pointedPage.frameI);
            cmdGroup.commands.push(cmd);
            cmd.execute();
            steps.push(cmd);
            this.faultHistory.push(true);
            pointer++;
        });

        // Undo everything
        let frame = this.pages.filter(p => p.frameI);
        steps.reverse().forEach(step => step.undo());
        return steps.reverse();
    }
}