import os

# Automated script to push changes
def push_changes():
    os.system("git add .")
    os.system('git commit -m "Automated commit from bot"')
    os.system("git push origin main")

if __name__ == "__main__":
    print("Running the bot...")
    push_changes()
