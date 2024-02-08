const dataParse = (dataObj) => {
    const ringOut = {};
    const ringIn = {};
    const addToRing = (props) => {
        const { ring, title, mainLinks, otherLinks, } = props;
        ring[title] = ring[title] || {
            mainLinks: [],
            otherLinks: [],
        };
        ring[title].mainLinks = [
            ...ring[title].mainLinks,
            ...mainLinks,
        ];
        ring[title].otherLinks = [
            ...ring[title].otherLinks,
            ...otherLinks,
        ];
    };
    for (const iterator of dataObj.values()) {
        const { name, mainSkills, otherSkills } = iterator;
        addToRing({
            ring: ringIn,
            title: name,
            mainLinks: mainSkills,
            otherLinks: otherSkills,
        });
        for (const mainLink of mainSkills) {
            addToRing({
                ring: ringOut,
                title: mainLink,
                mainLinks: [name],
                otherLinks: [],
            });
        }
        for (const link of otherSkills) {
            addToRing({
                ring: ringOut,
                title: link,
                mainLinks: [],
                otherLinks: [name],
            });
        }
    }
    return {
        ringOut,
        ringIn,
    };
};
console.log('data', data);
const obj = dataParse(data);
const { svg } = draw(d3, obj.ringIn, obj.ringOut);
const container = document.getElementById('container');
container.appendChild(svg);
