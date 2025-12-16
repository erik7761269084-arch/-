@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM ==== 配置 ====
set "BASE_DIR=E:\频道管理大全\GirlPhoto\actress_all"
set "TEMPLATE_FILE=%BASE_DIR%\test.html"
set "LOG_FILE=%BASE_DIR%\generate_html_log.txt"

echo ==== 开始生成 HTML ==== > "%LOG_FILE%"

REM ==== 遍历子目录 ====
for /d %%D in ("%BASE_DIR%\*") do (
    set "SUBDIR_NAME=%%~nxD"
    set "TARGET_FILE=%BASE_DIR%\!SUBDIR_NAME!.html"

    REM 复制模板
    copy "%TEMPLATE_FILE%" "!TARGET_FILE!" >> "%LOG_FILE%" 2>&1

    REM 生成临时 PowerShell 脚本
    set "PS_FILE=%TEMP%\replace_!SUBDIR_NAME!.ps1"
    (
        echo $filePath = "%TARGET_FILE%"
        echo $subdir = "!SUBDIR_NAME!"
        echo $content = Get-Content -Raw $filePath
        echo $content = $content -replace 'test', $subdir
        echo $content = $content -replace '<title>.*</title>', '<title>' + $subdir + '</title>'
        echo $content = $content -replace 'actress_test', 'actress_' + $subdir
        echo [System.IO.File]::WriteAllText($filePath, $content, (New-Object System.Text.UTF8Encoding($true)))
    ) > "!PS_FILE!"

    REM 执行 PowerShell 脚本
    powershell -NoProfile -ExecutionPolicy Bypass -File "!PS_FILE!" >> "%LOG_FILE%" 2>&1

    REM 删除临时 PowerShell 脚本
    del "!PS_FILE!" >> "%LOG_FILE%" 2>&1

    echo 已生成 !TARGET_FILE! >> "%LOG_FILE%"
)

echo ==== 完成 ==== >> "%LOG_FILE%"
echo 生成完成！日志文件：%LOG_FILE%
pause
