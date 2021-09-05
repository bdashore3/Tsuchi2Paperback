const fs = require("fs")
const { v4: uuidv4 } = require("uuid")

// Empty library and sourceMangas for PB Backup
const library = []
const sourceMangas = []

// Default PBBackup object
const pbBackup = {
  library: library,
  sourceMangas: sourceMangas,
  chapterMarkers: [],
  backupSchemaVersion: 3,
  date: 0,
  tabs: [],
  version: "v0.6.0-r2.0.5",
  sourceRepositories: [
    {
      name: "MangaDex",
      url: "https://paperback-ios.github.io/extensions-sources/primary/",
      type: 0,
    },
    {
      name: "MangaBox",
      url: "https://paperback-ios.github.io/extensions-generic/mangabox/",
      type: 0,
    },
    {
      name: "MangaLife and others",
      url: "https://paperback-ios.github.io/extensions-promises/",
      type: 0,
    },
  ],
  activeSources: [],
}

if (require.main === module) {
  main()
}

function main() {
  const manualBackup = fs.readFileSync(`./manualList.txt`, "utf-8")
  const manualBackupArray = parseTextFile(manualBackup)

  for (const element of manualBackupArray) {
    for (const title of element.titles) {
      const newTitle = title.slice(2, title.length)
      const manga = getManga(newTitle)

      library.push({
        lastRead: 0,
        manga: manga,
        lastUpdated: 0,
        dateBookmarked: 0.0,
        libraryTabs: [],
        updates: 0,
      })

      sourceMangas.push({
        mangaId: "",
        id: uuidv4(),
        manga: manga,
        originalInfo: manga,
        sourceId: element.source,
      })
    }
  }

  const pbBackupString = JSON.stringify(pbBackup, null, 2)
  fs.writeFileSync("./PBBackup-MangaSoup.json", pbBackupString)
}

function getManga(title) {
  const manga = {
    id: uuidv4(),
    rating: 0,
    covers: [],
    author: "",
    tags: [],
    desc: "",
    titles: [title],
    image: "",
    additionalInfo: {
      langFlag: "",
      users: "",
      langName: "",
      avgRating: "",
      views: "",
      follows: "",
    },
    hentai: false,
    artist: "",
    status: "",
  }

  return manga
}

function parseTextFile(userText) {
  const parentArray = []

  const splitArray = userText.split("\n")

  const filteredArray = splitArray.filter((v) => v !== "")
  const sources = filteredArray.filter((v) => v.slice(v.length - 1) === ":")

  for (let i = 0; i < sources.length; i++) {
    const upperBound =
      i + 1 === sources.length
        ? filteredArray.length
        : filteredArray.indexOf(sources[i + 1])

    const source = sources[i]
    const singleSourceArray = filteredArray.slice(
      filteredArray.indexOf(source) + 1,
      upperBound
    )

    const sampleObject = {
      source: source.substring(0, source.length - 1),
      titles: singleSourceArray,
    }

    parentArray.push(sampleObject)
  }

  return parentArray
}
