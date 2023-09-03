# Create frontend directories and empty files
New-Item -Path "frontend\public" -ItemType Directory -Force
New-Item -Path "frontend\public\index.html" -ItemType File
New-Item -Path "frontend\public\styles.css" -ItemType File
New-Item -Path "frontend\src" -ItemType Directory -Force
New-Item -Path "frontend\src\components" -ItemType Directory -Force
New-Item -Path "frontend\src\services" -ItemType Directory -Force
New-Item -Path "frontend\src\App.vue" -ItemType File
New-Item -Path "frontend\src\main.js" -ItemType File
New-Item -Path "frontend\src\router.js" -ItemType File
New-Item -Path "frontend\package.json" -ItemType File

# Create backend directories and empty files
New-Item -Path "backend\config" -ItemType Directory -Force
New-Item -Path "backend\controllers" -ItemType Directory -Force
New-Item -Path "backend\middleware" -ItemType Directory -Force
New-Item -Path "backend\models" -ItemType Directory -Force
New-Item -Path "backend\routes" -ItemType Directory -Force
New-Item -Path "backend\services" -ItemType Directory -Force
New-Item -Path "backend" -ItemType File -Force
New-Item -Path "backend\config\db.js" -ItemType File
New-Item -Path "backend\config\server.js" -ItemType File
New-Item -Path "backend\controllers\ocrController.js" -ItemType File
New-Item -Path "backend\controllers\nlpController.js" -ItemType File
New-Item -Path "backend\controllers\storageController.js" -ItemType File
New-Item -Path "backend\controllers\userController.js" -ItemType File
New-Item -Path "backend\middleware\auth.js" -ItemType File
New-Item -Path "backend\middleware\errorHandling.js" -ItemType File
New-Item -Path "backend\middleware\cors.js" -ItemType File
New-Item -Path "backend\middleware\fileTypeCheck.js" -ItemType File
New-Item -Path "backend\models\user.js" -ItemType File
New-Item -Path "backend\models\document.js" -ItemType File
New-Item -Path "backend\models\analysisResult.js" -ItemType File
New-Item -Path "backend\models\token.js" -ItemType File
New-Item -Path "backend\routes\ocrRoutes.js" -ItemType File
New-Item -Path "backend\routes\nlpRoutes.js" -ItemType File
New-Item -Path "backend\routes\storageRoutes.js" -ItemType File
New-Item -Path "backend\routes\userRoutes.js" -ItemType File
New-Item -Path "backend\services\ocrService.js" -ItemType File
New-Item -Path "backend\services\nlpService.js" -ItemType File
New-Item -Path "backend\services\storageService.js" -ItemType File
New-Item -Path "backend\services\queueService.js" -ItemType File
New-Item -Path "backend\services\messagingService.js" -ItemType File

Write-Host "Empty file structure created successfully!"
