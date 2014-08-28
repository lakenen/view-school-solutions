
if (!process.env.BOX_VIEW_API_TOKEN) {
  console.error('Error: $BOX_VIEW_API_TOKEN is not set!');
  process.exit();
}

require('view-school');
