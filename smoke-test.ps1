$url = "https://az-zero-downtime-ismail-2813-staging.azurewebsites.net"

Write-Host "Starting Smoke Test..." -ForegroundColor Cyan

try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing

    if ($response.StatusCode -eq 200 -and
        $response.Content -match "Azure Zero-Downtime Deployment") {

        Write-Host "SMOKE TEST PASSED" -ForegroundColor Green
    }
    else {
        Write-Host "SMOKE TEST FAILED" -ForegroundColor Red
    }
}
catch {
    Write-Host "APPLICATION IS DOWN" -ForegroundColor Red
}