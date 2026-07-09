export function saveDesign(design) {
  const id = crypto.randomUUID();

  const allDesigns = JSON.parse(
    localStorage.getItem("savedDesigns") || "{}"
  );

  allDesigns[id] = {
    ...design,
    createdAt: Date.now(),
  };

  localStorage.setItem(
    "savedDesigns",
    JSON.stringify(allDesigns)
  );

  return id;
}

export function loadDesign(id) {
  const allDesigns = JSON.parse(
    localStorage.getItem("savedDesigns") || "{}"
  );

  return allDesigns[id] || null;
}

export function getAllDesigns() {
  return JSON.parse(
    localStorage.getItem("savedDesigns") || "{}"
  );
}

export function deleteDesign(id) {
  const allDesigns = JSON.parse(
    localStorage.getItem("savedDesigns") || "{}"
  );

  delete allDesigns[id];

  localStorage.setItem(
    "savedDesigns",
    JSON.stringify(allDesigns)
  );
}