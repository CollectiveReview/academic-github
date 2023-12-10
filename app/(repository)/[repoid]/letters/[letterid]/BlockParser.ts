import { XMLParser } from "fast-xml-parser";

const detectBlockType = (keys: string[]) => {
    for (const key of keys) {
        if (key === "paragraph" ||
            key === "heading") { return key; }
        if (key === "bulletlistitem") { return "bulletListItem" }
    }
    return null;
}
const parseBlocks = (blockcontainer: []) => {
    if (blockcontainer) {
        const parsedBlock = blockcontainer.map((block) => {
            const keys = Object.keys(block)
            const key = detectBlockType(keys)
            if (!key) return null;
            return (
                {
                    id: block.$.id,
                    type: key,
                    props: block[key]?.$,
                    content: block[key]?.["#text"],
                    children: parseBlocks(block.blockgroup?.blockcontainer)
                }
            )

        })
        return parsedBlock.filter(block => block !== null)
    } else {
        return null
    }
}
const alwaysArray = [
    "blockcontainer",
];
const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    attributesGroupName: "$",
    isArray: (name: string, jpath: string) => {
        const leafPath = jpath.split(".").at(-1) ?? ""
        if (alwaysArray.indexOf(leafPath) !== -1) {
            return true;
        }
        else false;

    }
};
const parser = new XMLParser(options);

const parseXml = (xml: string) => {
    const jObj = parser.parse(xml)
    const parsedString = parseBlocks(jObj.blockgroup.blockcontainer)
    return parsedString
}

export default parseXml