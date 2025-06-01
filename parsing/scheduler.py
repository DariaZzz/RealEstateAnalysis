import schedule
import time
import subprocess
import logging

# Настройка логов
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def run_main_script():
    '''
    Запуск основного файла пасринга
    :return: обновление бд
    '''
    logger.info("Запуск main.py...")
    try:
        result = subprocess.run(
            ["python", "main.py"],
            capture_output=True,
            text=True
        )
        if result.stdout:
            logger.info(f"Output: {result.stdout}")
        if result.stderr:
            logger.error(f"Errors: {result.stderr}")
    except Exception as e:
        logger.error(f"Ошибка: {e}")

# Расписание (например, каждый день в 03:30)
# schedule.every().day.at("03:30").do(run_main_script)

# Альтернативно для теста: каждую минуту
schedule.every(1).minutes.do(run_main_script)

logger.info("Планировщик запущен. Ожидание задач...")
while True:
    schedule.run_pending()
    time.sleep(60)  # Проверяем каждую минуту