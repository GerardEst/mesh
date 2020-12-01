const Polygon = require('../models/Polygon')
const Project = require('../models/Project')

exports.savePolygon = async function(req,res){
  // Guarda el poligono 
  // Lo añade a un proyecto
  let idProject = req.body.project
  const newPolygon = new Polygon({
    name: req.body.name,
    color: req.body.color,
    points: req.body.points
  })
  newPolygon.save()

  let project = await Project.findById(idProject)
  project.polygons.push(newPolygon._id)
  project.save()

  res.send(newPolygon)
}