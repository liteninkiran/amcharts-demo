import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
    selector: 'app-word-cloud',
    templateUrl: './word-cloud.component.html',
    styleUrls: ['./word-cloud.component.scss'],
})
export class WordCloudComponent implements OnInit {

    public root!: am5.Root;
    public series!: am5wc.WordCloud;
    public form: FormGroup;
    public myText: string = '';

    constructor(private fb: FormBuilder) {
        this.form = this.getFormGroup();
    }

    public ngOnInit(): void {
        this.root = am5.Root.new('chartdiv');
        this.createWordCloud();
    }

    public getFormGroup(): FormGroup {
        return this.fb.group({
            myText: [this.getLoremIpsum()],
        });
    }

    public createWordCloud() {
        this.root.setThemes([
            am5themes_Animated.new(this.root),
        ]);

        this.series = this.root.container.children.push(am5wc.WordCloud.new(this.root, {
            excludeWords: ['the', 'a', 'an', 'of', 'to', 'and'],
            maxCount: 100,
            minWordLength: 2,
            maxFontSize: am5.percent(35),
            text: this.getDefaultText(),
        }));

        // Configure labels
        this.series.labels.template.setAll({
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            fontFamily: "Courier New"
        });
    }

    public logText() {
        console.log(this.series._settings.text);
        console.log(this.series.data.values);
    }

    public submitForm() {
        this.series.data.clear();
        this.series = this.root.container.children.push(am5wc.WordCloud.new(this.root, {
            excludeWords: ['the', 'a', 'an', 'of', 'to', 'and'],
            maxCount: 100,
            minWordLength: 2,
            maxFontSize: am5.percent(35),
            text: this.form.value.myText,
        }));
    }

    public getLoremIpsum(): string {
        return "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
        "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It " +
        "has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in " +
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
        "PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable " +
        "content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as " +
        "opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now " +
        "use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions " +
        "have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to " +
        "popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years " +
        "old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from " +
        "a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from " +
        "sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise " +
        "on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in " +
        "section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from " +
        "'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation " +
        "by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some " +
        "form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to " +
        "be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks " +
        "as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model " +
        "sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, " +
        "or non-characteristic words etc.";
    }

    public getDefaultText(): string {
        return "Though yet of Hamlet our dear brother's death The memory be green, and that it us " +
        "befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of " +
        "woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, " +
        "Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The " +
        "imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an " +
        "auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal " +
        "scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better " +
        "wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, " +
        "that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our " +
        "late dear brother's death Our state to be disjoint and out of frame, Colleagued with the " +
        "dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender " +
        "of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much " +
        "for him. Now for ourself and for this time of meeting: Thus much the business is: we have here " +
        "writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this " +
        "his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and " +
        "full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, " +
        "and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further " +
        "personal power To business with the king, more than the scope Of these delated articles allow. " +
        "Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, " +
        "Hamlet, To give these mourning duties to your father: But, you must know, your father lost a " +
        "father; That father lost, lost his, and the survivor bound In filial obligation for some term To " +
        "do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; " +
        "'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, " +
        "An understanding simple and unschool'd: For what we know must be and is as common As any the most " +
        "vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault " +
        "to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is " +
        "death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must " +
        "be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the " +
        "world take note, You are the most immediate to our throne; And with no less nobility of love Than that " +
        "which dearest father bears his son, Do I impart toward you. For your intent In going back to school in " +
        "Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the " +
        "cheer and comfort of our eye, Our chiefest courtier, cousin, and our son.";
    }
}
