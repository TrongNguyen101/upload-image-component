using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class LoadImageController : ControllerBase
{
    [HttpGet("{fileName}")]
    public IActionResult GetImage(string fileName)
    {
        var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedImages", fileName);

        if (!System.IO.File.Exists(imagePath))
        {
            return NotFound("Image not found.");
        }

        var imageBytes = System.IO.File.ReadAllBytes(imagePath);
        return File(imageBytes, "image/jpeg");
    }
}