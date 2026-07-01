# ==========================================
# PROJECT PHOENIX
# sistema.py
# ==========================================

import os
from dados import jogador


# -----------------------------
# LIMPAR TELA
# -----------------------------

def limpar():
    os.system("cls" if os.name == "nt" else "clear")


# -----------------------------
# PAUSAR
# -----------------------------

def pausar():
    input("\nPressione ENTER para continuar...")


# -----------------------------
# LOGO
# -----------------------------

def mostrar_logo():

    limpar()

    print("=" * 45)
    print("🔥        PROJECT PHOENIX        🔥")
    print("=" * 45)
    print("        V1.0 - RENASCIMENTO")
    print("=" * 45)

    print(f"\n👤 Jogador : {jogador['nome']}")
    print(f"⭐ Nível   : {jogador['nivel']}")
    print(f"🔥 Chamas : {jogador['chamas']}")
    print(f"🪙 Ouro   : {jogador['ouro']}")

    print("\n" + "=" * 45)


# -----------------------------
# ROTINA
# -----------------------------

def abrir_rotina():

    mostrar_logo()

    print("\n📅 MISSÕES DE HOJE\n")

    for missao, feita in jogador["missoes"].items():

        simbolo = "✅" if feita else "⬜"

        print(f"{simbolo} {missao}")

    pausar()


# -----------------------------
# GLOW UP
# -----------------------------

def abrir_glowup():

    mostrar_logo()

    print("\n😎 GLOW UP")

    print("\nObjetivos:")

    print("• Dormir bem")
    print("• Beber bastante água")
    print("• Fazer skincare")
    print("• Alimentação limpa")
    print("• Tomar sol")

    pausar()


# -----------------------------
# CALISTENIA
# -----------------------------

def abrir_calistenia():

    mostrar_logo()

    print("\n💪 CALISTENIA")

    print("\nTreino de hoje:")
    print("• Flexões")
    print("• Agachamentos")
    print("• Barra (quando possível)")
    print("• Prancha")

    pausar()


# -----------------------------
# TOUCHLINE
# -----------------------------

def abrir_touchline():

    mostrar_logo()

    print("\n⚽ TOUCHLINE")

    print("\nObjetivo:")
    print("Ser um jogador acima da média.")

    pausar()


# -----------------------------
# ESTUDOS
# -----------------------------

def abrir_estudos():

    mostrar_logo()

    print("\n📚 ESTUDOS")

    print("\nMetas:")
    print("• Escola")
    print("• Python")
    print("• IF")

    pausar()


# -----------------------------
# STATUS
# -----------------------------

def abrir_status():

    mostrar_logo()

    print("\n📊 STATUS\n")

    for nome, valor in jogador["status"].items():

        print(f"{nome:<15} : {valor}")

    pausar()


# -----------------------------
# CONQUISTAS
# -----------------------------

def abrir_conquistas():

    mostrar_logo()

    print("\n🏆 CONQUISTAS")

    print("\n🔒 Em desenvolvimento...")

    pausar()


# -----------------------------
# CONFIGURAÇÕES
# -----------------------------

def abrir_config():

    mostrar_logo()

    print("\n⚙ CONFIGURAÇÕES")

    print("\n🔒 Em desenvolvimento...")

    pausar()
