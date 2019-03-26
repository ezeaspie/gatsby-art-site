const artList = [
    {
        title: 'Oh Julie!',
        imgsrc:"OhJulie",
        description: 'A stylized version of my comic style, with a focus on bold colors, heavy lines, and half-tone shading.',
        date: ["14 August 2018", "2018"],
        featured: true,
        medium: "Mixed Media",
        id: 0,
    },
    {
        imgsrc:"MaxineRubin",
        title: 'Maxine Rubin',
        description: 'A digital concept portrait for a character that focused on more detailed shading.',
        date: ["December 2017", "2017"],
        featured: true,
        medium: "Digital",
        id: 1,
    },
    {
        imgsrc:"ClarissasRegrets",
        title: "Clarissa's Regrets",
        description: "Another stylized portrait of a character with Blonde Hair and a distressed look.",
        date: ["16 August 2018", "2018"],
        featured: true,
        medium: 'Mixed Media',
        id: 2,
    },
    {
        imgsrc:"HarbourConceptCover",
        title: "Harbour Concept Cover",
        description: "An early concept of a cover for a novel I was writing.",
        date: ["June 12, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 4,
    },
    {
        imgsrc:"MadelineHarbourConcept2",
        title: "Madeline Harbour Concept 2",
        description: "A pencil drawing of an original character of mine.",
        date: ["November 20, 2017", "2017"],
        featured: true,
        medium: 'Pencil on Paper',
        id: 20,
    },
    {
        imgsrc:"Lost",
        title: "Lost",
        description: "An image of a blue haired woman with tape around her mouth.",
        date: ["January 3, 2017", "2017"],
        featured: false,
        medium: 'Digital',
        id: 5,
    },
    {
        imgsrc:"TheYoungestBrother",
        title: "The Youngest Brother",
        description: "A pencil drawing of my younger brother.",
        date: ["August 20, 2016", "2016"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 29,
    },
    {
        imgsrc:"S.R",
        title: "S.R",
        description: "A digital painting depicting a woman in a mask.",
        date: ["October 31, 2017", "2017"],
        featured: true,
        medium: 'Digital',
        id: 6,
    },
    {
        imgsrc:"ClarissaLane",
        title: "Clarissa Lane",
        description: "A pencil on paper drawing of a woman wearing a turtleneck.",
        date: ["February 5, 2017", "2017"],
        featured: true,
        medium: 'Pencil on Paper',
        id: 8,
    },
    {
        imgsrc:"LegoComposite",
        title: "Lego Composite",
        description: "A photo mashup depicting lego figurines standing in a lit outdoor walkway.",
        date: ["February 22, 2015", "2015"],
        featured: true,
        medium: 'Digital',
        id: 9,
    },
    {
        imgsrc:"UntitledI",
        title: "Untitled I",
        description: "A digital sketch of a girl with purple hair",
        date: ["December 20, 2016", "2016"],
        featured: false,
        medium: 'Sketch',
        id: 10,
    },
    {
        imgsrc:"Fuerza",
        title: "Fuerza",
        description: "A pencil drawing showing a woman lifting a bar over her head",
        date: ["August 10, 2016", "2016"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 11,
    },
    {
        imgsrc:"HarbourCover2",
        title: "Harbour Cover 2",
        description: "A digital magazine sketch depicting my fictional character : Madeline Harbour.",
        date: ["January 9, 2017", "2017"],
        featured: true,
        medium: 'Digital',
        id: 12,
    },
    {
        imgsrc:"IslaIsolada",
        title: "Isla Isolada",
        description: "A digital sketch in a grayscale setting depicting a girl in front of a sea cave.",
        date: ["April 24, 2018", "2018"],
        featured: false,
        medium: 'Sketch',
        id: 13,
    },
    {
        imgsrc:"JulianGaitan",
        title: "Julian Gaitan",
        description: "A pencil drawing of one of my fictional characters : Julian Gaitan.",
        date: ["January 3,2017", "2017"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 14,
    },
    {
        imgsrc:"JulietteandMaxine",
        title: "Juliette and Maxine",
        description: "A very early panel of a comic I am writing where two girls confront each other indoors.",
        date: ["April 22, 2018", "2018"],
        featured: true,
        medium: 'Mixed Media',
        id: 15,
    },
    {
        imgsrc:"JulietteSandover",
        title: "Juliette Sandover First Concept",
        description: "A digital portrait of a woman with brown hair.",
        date: ["February 20, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 16,
    },
    {
        imgsrc:"JulietteSandoverII",
        title: "Juliette Sandover II",
        description: "A pencil portrait of a fictional character: Juliette Sandover..",
        date: ["January 1, 2017", "2017"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 17,
    },
    {
        imgsrc:"JulietteSandoverIII",
        title: "Juliette Sandover III",
        description: "Another face concept for Juliette Sandover..",
        date: ["April 1, 2017", "2017"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 18,
    },
    {
        imgsrc:"MadelineBodyConceptII",
        title: "Madeline Body Concept II",
        description: "A digital full body portrait of Madeline Harbour, ",
        date: ["April 17, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 19,
    },
    {
        imgsrc:"MadelineHarbourConcept1",
        title: "Madeline Harbour Concept 1",
        description: "A portrait of Madeline Harbour, a fictional character of mine.",
        date: ["December 29, 2016", "2016"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 21,
    },
    {
        imgsrc:"MadelineHarbourBodyConceptI",
        title: "Madeline Harbour Body Concept I",
        description: "A full body drawing of Madeline Harbour.",
        date: ["December 28, 2016", "2016"],
        featured: false,
        medium: 'Sketch',
        id: 22,
    },
    {
        imgsrc:"MadelineHarbourConcept3",
        title: "Madeline Harbour Concept 3",
        description: "A digital portrait of the lead character Madeline Harbour.",
        date: ["August 10, 2017", "2017"],
        featured: false,
        medium: 'Digital',
        id: 23,
    },
    {
        imgsrc:"MaxineRubinBodyConcept",
        title: "Maxine Rubin Body Concept",
        description: "A concept drawing for Maxine Rubin, one of my fictional characters.",
        date: ["July 20, 2017", "2017"],
        featured: false,
        medium: 'Sketch',
        id: 24,
    },
    {
        imgsrc:"MaxineRubinComposition",
        title: "Maxine Rubin Composition",
        description: "A piece in where Maxine Rubin is standing in front of a flag of the city of Northern Serenity.",
        date: ["June 26, 2018", "2018"],
        featured: false,
        medium: 'Mixed Media',
        id: 25,
    },
    {
        imgsrc:"Splash",
        title: "Splash",
        description: "A rather abstract digital composition portrait of myself.",
        date: ["May 8, 2016", "2016"],
        featured: true,
        medium: 'Digital',
        id: 26,
    },
    {
        imgsrc:"UntitledII",
        title: "Untitled II",
        description: "A digital drawing of a black haired woman wearing a purple dress.",
        date: ["June 21, 2017", "2017"],
        featured: false,
        medium: 'Sketch',
        id: 27,
    },
    {
        imgsrc:"skeleton",
        title: "The Skeleton who Dressed As My Mother",
        description: "A drawing of a feminine skeleton with patterns all over.",
        date: ["July 28, 2016", "2016"],
        featured: false,
        medium: 'Pen on Paper',
        id: 28,
    },
    {
        imgsrc:"unionharbor",
        title: "Union Harbor - Market",
        description: "A enviornment concept depicting a street with various shops.",
        date: ["June 3, 2018", "2018"],
        featured: true,
        medium: 'Mixed Media',
        id: 30,
    },
    {
        imgsrc:"Bebe",
        title: "Bebe",
        description: "An early pencil drawing of singer-songwriter Bebe Rexha",
        date: ["October 22, 2016", "2016"],
        featured: false,
        medium: 'Pencil on Paper',
        id: 7,
    },
    {
        imgsrc:"womanAndSea",
        title: "The Young Woman and the Sea",
        description: "A drawing of Maxine Rubin facing the marketplace of Union Harbor.",
        date: ["November 20, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 7,
    },
    {
        imgsrc:"NorthernSerenity",
        title: "Northern Serenity",
        description: "A map of the fictional island city known as Northern Serenity",
        date: ["September 22, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 7,
    },
    {
        imgsrc:"FridayNightKaraoke",
        title: "Friday Night Karaoke",
        description: "A looping gif of woman singing lyrics.",
        date: ["December 21, 2018", "2018"],
        featured: true,
        medium: 'Digital',
        id: 7,
    },
    {
        imgsrc:"HeroineRisesComicPage",
        title: "Heroine Rises Comic Page",
        description: "A concept page from my comic series Heroine Rises.",
        date: ["November 29, 2018", "2018"],
        featured: true,
        medium: 'Mixed Media',
        id: 7,
    },
    {
        imgsrc:"NorthernSerenityFlag",
        title: "Northern Serenity Flag",
        description: "An image of what the flag of Northen Serenity looks like",
        date: ["June 28, 2018", "2018"],
        featured: false,
        medium: 'Digital',
        id: 7,
    },
    {
        imgsrc:"TheGardenOfAda",
        title: "The Garden of Ada",
        description: "A concept drawing for the backyard of Ada Lima's home.",
        date: ["March 22, 2019", "2019"],
        featured: true,
        medium: 'Digital',
        id: 7,
    },
]

export default artList; 